#!/usr/bin/env node

import * as  yargs from 'yargs' 


function start() {
    yargs.command('start',
        'hello world',
        {
        },
        async (argv) => {
          
        }).help()
    let argv = yargs.version().argv
    if (!argv._.length) {
        yargs.showHelp()
    }
}

start()
