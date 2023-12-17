import { buildConfig } from 'payload/config'
import { BaseDatabaseAdapter } from 'payload/dist/database/types'
import { Payload } from 'payload/dist/payload'

export default buildConfig({
    db: function (args: { payload: Payload }): BaseDatabaseAdapter {
        throw new Error('Function not implemented.')
    },
    editor: lexicalEditor({}),
})

function lexicalEditor(arg0: {}): import("payload/dist/exports/types").RichTextAdapter<any, any, any> {
    throw new Error('Function not implemented.')
}
