let file = await Deno.open('greet.text');
await Deno.copy(file, Deno.stdout);
file.close();