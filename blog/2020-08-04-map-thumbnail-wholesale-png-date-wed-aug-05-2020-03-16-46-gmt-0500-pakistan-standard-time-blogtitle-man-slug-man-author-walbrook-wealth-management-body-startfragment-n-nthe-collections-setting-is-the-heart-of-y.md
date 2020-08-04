---
blogtitle: Man
Slug: man
date: 2020-08-04T22:16:46.371Z
author: Walbrook Wealth Management
thumbnail: wholesale.png
---
<!--StartFragment-->

The `collections` setting is the heart of your Netlify CMS configuration, as it determines how content types and editor fields in the UI generate files and content in your repository. Each collection you configure displays in the left sidebar of the Content page of the editor UI, in the order they are entered into your Netlify CMS `config.yml` file.

![](../src/images/brandlogo1.svg)

`collections` accepts a list of collection objects, each with the following options:

* `name` (required): unique identifier for the collection, used as the key when referenced in other contexts (like the [relation widget](https://www.netlifycms.org/docs/widgets/#relation))
* `identifier_field`: see detailed description below
* `label`: label for the collection in the editor UI; defaults to the value of `name`

<!--EndFragment-->