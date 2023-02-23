import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

import mongoose, { ConnectOptions} from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import { Users } from './entity/users.entity'
import { Cities } from './entity/cities.entity'

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

mongoose.set('strictQuery', true)

const PORT = 3000

const start = async () => {
  await mongoose.connect("mongodb://localhost:27017/adminJS", {useNewUrlParser: true,} as ConnectOptions);

  const app = express()
  const admin = new AdminJS({
    resources: [
      Users,
      Cities
    ],
    rootPath: '/admin'   // Path to the AdminJS dashboard.
  })
  // Build and use a router to handle AdminJS routes.
  const router = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, router)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()