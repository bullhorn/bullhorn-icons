# ![BULLHORN-ICONS](banner.png)

> This repository contains the icon fonts maintained by Bullhorn.

--- 
 
 [![Build Status](https://travis-ci.org/bullhorn/bullhorn-icons.svg?branch=master)](https://travis-ci.org/bullhorn/bullhorn-icons?branch=master)
 [![npm version](https://badge.fury.io/js/%40bullhorn%2Fbullhorn-icons.svg)](https://badge.fury.io/js/%40bullhorn%2Fbullhorn-icons)
 [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
 [![built by](https://img.shields.io/badge/built%20by-bullhorn-f39f37.svg)](https://bullhon.github.io/bullhorn-icons)

---

[Website](http://bullhorn.github.io) • [Preview](http://bullhorn.github.io/bullhorn-icons) • [Blog](https://medium.com/bullhorn-dev) 


## Install

Available via npm

```bash
npm install --save @bullhorn/bullhorn-icons
```


## Usage

### Loading the Styles

> Import from CDN

```html
/* UnPkg for NPM Version*/
<link rel="stylesheet" type="text/css" href="//unpkg.com/@bullhorn/bullhorn-icons@2.2.0/fonts/Bullhorn-Glyphicons.css"/>
/* jsDelivr for GitHub Version*/
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/bullhorn/bullhorn-icons@v2.2.0/fonts/Bullhorn-Glyphicons.css"/>
```

> Import via scss

```scss
@include 'bullhorn-icons';
```

### Using an icon

<p>
    <img title="Candidate icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/candidate.svg" width="64" />
    <img title="Person icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/person.svg" width="64" />
    <img title="Job icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/job.svg" width="64" />
    <img title="Company icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/company.svg" width="64" />
    <img title="Lead icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/lead.svg" width="64" />
    <img title="Opportunity icon" src="http://cdn.rawgit.com/bullhorn/bullhorn-icons/master/icons/opportunity.svg" width="64" />
</p>

```html
<i class="bhi-candidate"></i>
<i class="bhi-person"></i>
<i class="bhi-job"></i>
<i class="bhi-company"></i>
<i class="bhi-lead"></i>
<i class="bhi-opportunity"></i>
```
## Contributing

Please read through our [contributing guidelines](https://github.com/bullhorn/bullhorn-icons/blob/master/CONTRIBUTING.md).
Included are directions for opening issues, coding standards, and notes on development.

## Versioning

Maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered
with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes, changes to brand logos, and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org.

---

<p>
	<img src="bully.png" align="left" width="24" />
	<span>&nbsp; Built by Bullhorn, copyright (c) forever</span>
</p>
