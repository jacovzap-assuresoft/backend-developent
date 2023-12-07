import amqp from "amqplib"
import { data } from "./inventoryData"

async function run() {
  const connection = await amqp.connect('amqp://localhost')
  const channel = await connection.createChannel()

  const q = 'rpc_inventory_queue'

  await channel.assertQueue(q, { durable: true })
  channel.prefetch(1);

  console.log('Servidor de Inventario: Esperando solicitudes RPC...')

  channel.consume(q, async (msg) => {
    const productName = msg?.content.toString()
    const inventory = getInventory(productName as string)

    console.log(`Recibida solicitud para ${productName}`)
    console.log(`Enviando inventario: ${inventory}`)

    channel.sendToQueue(msg?.properties.replyTo!,
      Buffer.from(inventory.toString()), {
        correlationId: msg?.properties.correlationId!,
        persistent: true,
      })

    channel.ack(msg!)
  })
}

function getInventory(product: string): string {

  const inventory = data.find((item) => item.name === product)?.items

  if (inventory === undefined) {
    return `No se encontró el producto ${product}`
  }

  return `Inventario de ${product}: ${inventory} unidades`
}

run()