import amqp from 'amqplib'
import readline from 'readline'
import { v4 as uuidv4 } from 'uuid'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getInput (question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer)
    })
  })
}

async function run() {
    const connection = await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()

    const q = 'rpc_inventory_queue'

    // Crear la cola temporal para la respuesta
    const { queue } = await channel.assertQueue('', { exclusive: true })

    // Escuchar la respuesta
    channel.consume(queue, (msg) => {
      console.log('Respuesta del servidor:', msg!.content.toString())
    }, { noAck: true })

    // Esperar que el usuario ingrese nombres de productos
    while (true) {
      const productName = await getInput('Ingrese el nombre del producto (o "exit" para salir): ')

      if (productName.toLowerCase() === 'exit') {
        connection.close()
        process.exit(0)
      }

      const correlationId = uuidv4()
      channel.sendToQueue(q, Buffer.from(productName), {
        correlationId: correlationId,
        replyTo: queue,
      })
    }
  }


run()
