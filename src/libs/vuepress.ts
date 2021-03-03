import { createApp } from 'vuepress'

export const build = action('build', () => { process.env.NODE_ENV = 'production' })
export const dev = action('dev')

async function action(actionName, callback?) {
    return async (options) => {
        callback && await callback
        const app = createApp(options)
        try {
            await app.process()
            await app['dev' || 'build']()
        } catch (e) {
            console.error(e.message)
        }
    }
}
