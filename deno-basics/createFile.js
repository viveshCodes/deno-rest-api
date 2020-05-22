const encoder = new TextEncoder();

const greet = encoder.encode('Welcome to Deno Land');

await Deno.writeFile('greet.text', greet);