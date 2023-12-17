import { buildConfig } from 'payload/config'
import {mongooseAdapter} from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';

export default buildConfig({
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    editor: slateEditor({}),
    admin:{
        bundler: webpackBundler(),
        meta:{
            titleSuffix: '-blocks',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail,jpg'
        }
    },
    rateLimit: {
        max: 2000
    },
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes:{
        admin: '/sell'
    }
})




