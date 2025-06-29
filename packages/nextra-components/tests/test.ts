import { Clerc } from 'clerc';

const cli = Clerc.create()
  .name('Foo CLI') // Optional, defaults to scriptName
  .scriptName('foo-cli')
  .description('A simple cli')
  .version('1.0.0') // You can use Clerc.create(name, description, version) instead
  .command('foo', 'A foo command', {
    parameters: ['<required parameters>'],
  })
  .on('foo', (context) => {
    console.log(context.parameters.requiredParameters);
    console.log('It works!');
  })
  .parse();
