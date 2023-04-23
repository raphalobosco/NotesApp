import PocketBase from 'pocketbase'

const url = 'https://notes-rapha.pockethost.io' 
export const client = new PocketBase(url)
client.autoCancellation(false)

export async function getNotes() {
    return await client
    .collection('notes').getFullList()
}