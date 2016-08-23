# CDNJS API

## Search
```
https://api.cdnjs.com/libraries
```

Returns the name and main file URL of every library on CDNJS. Example below.

```json
{
  "results": [
    {
      "name": "1140",
      "latest": "https://cdnjs.cloudflare.com/ajax/libs/1140/2.0/1140.min.css"
    },
    {
      "name": "1000hz-bootstrap-validator",
      "latest": "https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.5/validator.min.js"
    }
  ]
}
```

## Search with Params

```
https://api.cdnjs.com/libraries?search=jquery
```

Returns the search results. Minified result is returned by default.

```json
{
  "results": [
    {
      "name": "jquery",
      "latest": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
    },
    {
      "name": "jquery-compat",
      "latest": "https://cdnjs.cloudflare.com/ajax/libs/jquery-compat/3.0.0-alpha1/jquery.min.js"
    }
  ]
}
```

## Search with more Params

```
https://api.cdnjs.com/libraries?search=jquery&fields=assets
```

```json
{
  "results": [
    {
      "name": "jquery",
      "latest": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js",
      "assets": [
        {
          "version": "3.1.0",
          "files": [
            "core.js",
            "jquery.js",
            "jquery.min.js",
            "jquery.min.map",
            "jquery.slim.js",
            "jquery.slim.min.js",
            "jquery.slim.min.map"
          ]
        }
      ]
    }
  ]
}
```

Above will give us the name that matches the search, the latest version of the library, and the assets array which contains other versions.
