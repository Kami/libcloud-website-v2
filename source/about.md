---
layout: page
title: About
---

# About

Libcloud is a Python library which hides differences between different cloud
provider APIs. It allows you to manage different cloud resources offered by
many different providers through a unified and easy to use API.

Resource you can manage with Libcloud are divided in the following categories:

* Cloud Servers and Block Storage - services such as Amazon EC2 and Rackspace
  CloudServers
* Cloud Object Storage and CDN - services such as Amazon S3 and Rackspace
  CloudFiles
* Load Balancers as a Service - services such as Amazon Elastic Load Balancer
  and GoGrid LoadBalancers
* DNS as a Service - services such as Amazon Route 53 and Zerigo

For more information about the features and supported providers, please refer
to the [documentation][9].

## History

Libcloud was originally developed and open-source in 2009 by folks at
[Cloudkick][4]. It was developed to solve a problem of talking to multiple
different cloud provider APIs.

Later that year, the project joined Apache Incubator and in May of 2011,
the project graduated from the incubator to a top level project.

For a full timeline of the events and other important dates, please see the
"Important Milestones and Dates" section bellow.

## Supported Python Versions

Libcloud supports the following Python version:

* Python 2.5,
* Python 2.6,
* Python 2.7,
* PyPy,
* Python 3 (since 0.7.1)

Support for Python 2.4 has been dropped in **Libcloud 0.4.0**.

## Release Schedule

We don't follow a regular releases schedule as you might know it from other
projects such as Ubuntu.

Here are the guidelines we follow when scheduling and preparing a release:

1. Normal (stable) release - We prepare and get the release out as soon as
enough changes accumulate in trunk.
2. Bug fix release - It depends on the severity of a bug and how many users
it affects. If it affects a lot of users or a big chunk of the code we try
to prepare and get the release out as soon as possible.
3. Security fix release - We prepare and get the release out as soon as
possible.

## Similar Libraries in Other Languages

As noted above, Libcloud is a Python library. If you are looking for a similar
library for a different language, you should look at some of the libraries
listed bellow:

* Java - [Apache jclouds][10]
* Ruby - [Apache Deltacloud][13], [Fog][11]
* Node.js - [pkgcloud][12]

## Important Milestones and Dates

* Summer 2009 - Libcloud development starts at Cloudkick.
* July 23, 2009 - [First open-source version of Libcloud is released by folks at Cloudkick][16]
* November 11th, 2009 - [Project enters Apache Incubator][2].
* March 22nd, 2011 - [Website has been ported to Apache CMS][15].
* May 10th, 2010 - [First Apache release (0.3.1) is out][14]
* May 10th, 2011 - [Community voting for graduation to a Top Level Project has started][17]
* May 19th, 2011 - [Project graduates to a top level project][3]
* May 19th, 2011 - [Project gets a chair - Tomaz Muraus][3]
* May 25, 2011 - [Libcloud 0.5.0 which moves away from compute only and includes
  support for object storage and load balancer API is released][5]
* November 5th, 2011 - [Libcloud 0.6.0 which includes support for a new DNS
  API is released][6]
* April 2012 - Libcloud has received one slot at GSoC 2012. Student Ilgiz
  Islamgulov worked on "Libcloud REST interface" project
* July 2013 - Worked has started on a new and improved documentation which is
  now hosted on ReadTheDocs.

[1]: {{ page.url }}
[2]: http://incubator.apache.org/projects/libcloud.html
[3]: https://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces12
[4]: http://en.wikipedia.org/wiki/Cloudkick
[5]: http://mail-archives.apache.org/mod_mbox/libcloud-dev/201105.mbox/%3CBANLkTi%3DLqBidHLHUwAJSAWSzd-qSpad%2BdA%40mail.gmail.com%3E
[6]: http://mail-archives.apache.org/mod_mbox/libcloud-dev/201111.mbox/%3CCAJMHEmKkRPVeLjJ%2BCeTFU0wrW2QbyOz2bd3HVLi3Ydw283oDKQ%40mail.gmail.com%3E
[7]: http://www.google-melange.com/gsoc/projects/list/google/gsoc2012
[8]: https://issues.apache.org/jira/browse/LIBCLOUD-159
[9]: https://libcloud.readthedocs.org/en/latest/
[10]: http://jclouds.apache.org/
[11]: http://fog.io/
[12]: https://github.com/nodejitsu/pkgcloud
[13]: http://deltacloud.apache.org/
[14]: http://mail-archives.us.apache.org/mod_mbox/www-announce/201005.mbox/%3CAANLkTilX0aWMhmdZWm-vCF3XjNaOQHrv7MWuj0ogNhRf@mail.gmail.com%3E
[15]: http://mail-archives.apache.org/mod_mbox/incubator-libcloud/201103.mbox/%3CAANLkTi=aYQQfcZRJW0yz4Fhm8WeHSzDFbGM5tdsOz4sd@mail.gmail.com%3E
[16]: http://web.archive.org/web/20120517182502/https://www.cloudkick.com/blog/2009/jul/23/libcloud-announced/
[17]: http://mail-archives.apache.org/mod_mbox/incubator-libcloud/201105.mbox/%3CBANLkTimouwpSUkw-BVPV_KnpbfFgU6yqeQ@mail.gmail.com%3E
