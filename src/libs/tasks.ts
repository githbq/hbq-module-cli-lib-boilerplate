
import * as fs from 'fs-extra'
import * as path from 'path'
let multiMode = false
let cwd = process.cwd()
let distPath = path.join(cwd, 'dist')
let projects = []


export const init = async (options) => {
    options = options || {}
    cwd = options.cwd || cwd
    multiMode = !!options.multiMode
    distPath = path.join(cwd, 'dist')
    await fs.remove(path.join(cwd, 'dist'))
}


export const search = () => {

}

export const copy = () => {

}

export const createModel = () => {

}

export const createRoute = () => {

}

export const vuepressAction = (action) => {

}

