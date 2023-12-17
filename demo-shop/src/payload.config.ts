import { buildConfig } from 'payload/config'
import {mongooseAdapter} from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';

export default buildConfig({
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    editor: slateEditor({}),
})




