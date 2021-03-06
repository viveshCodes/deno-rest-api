## Deno 
A **secure** runtime for **JavaScript** and **TypeScript**.

## Features
* Secure by default. No file, network, or environment access, unless explicitly enabled.
* Supports TypeScript out of the box.
* Ships only a single executable file.
* Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
* Has a set of reviewed (audited) standard modules that are guaranteed to work with [Deno Standard Library](https://deno.land/std)

## Installation guide 

**With Shell (Mac, Linux)**

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**With PowerShell (Windows)**

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

### Install Specific Version

**With Shell (Mac, Linux)**

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh -s v0.38.0
```

**With PowerShell (Windows)**

```powershell
iwr https://deno.land/x/install/install.ps1 -useb -outf install.ps1; .\install.ps1 v0.38.0
```

### Install via Package Manager

**With [Scoop](https://scoop.sh) (Mac)**

```powershell
scoop install deno
```

**With [Homebrew](https://formulae.brew.sh/formula/deno) (Windows)**

```sh
brew install deno
```

**With [Chocolatey](https://chocolatey.org/packages/deno) (Windows)**

```powershell
choco install deno
```
## Running File
* ``` deno run filename```
* ``` deno run --allow-read filename``` (to read a file)
* ``` deno run --allow-write filename``` (to write into a file)
* ``` deno run --allow-net filename``` (to run server file)

## REST API
1. Download Postman from [here](https://www.postman.com/downloads/)
2. Go to directory **deno-rest-api** and run the command
``` deno run --allow-net app.ts```
3. Perform these requests in postman,
  ```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
```
