const note=require('./note.js');
const yargs=require('yargs');
console.log('app');
console.log(yargs.argv.title);
if(yargs.argv._[0]=='add')
{
  console.log('app');
 note.add(yargs.argv.title,yargs.argv.body);
}
