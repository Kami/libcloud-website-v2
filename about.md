---
layout: page
title: About
---

# About

Libcloud is a Python library which hides differences between different cloud
provider APIs and allows you to manage different cloud resources through a
unified and easy to use API.

* Cloud Servers and Block Storage - services such as Amazon EC2 and Rackspace
  CloudServers
* Cloud Object Storage and CDN - services such as Amazon S3 and Rackspace
  CloudFiles
* Load Balancers as a Service - services such as Amazon Elastic Load Balancer
  and GoGrid LoadBalancers
* DNS as a Service - services such as Amazon Route 53 and Zerigo

# Supported Python Versions

Libcloud supports the following Python version:

* Python 2.5,
* Python 2.6,
* Python 2.7,
* PyPy,
* Python 3 (since 0.7.1)

Support for Python 2.4 has been dropped in **Libcloud 0.4.0**. If you are
still using Python 2.4 you need to use a version prior to **0.4.0**.

# Similar Libraries in Other Languages

As noted above, Libcloud is a Python library. If you are looking for a similar
library for a different language, you should look at some of the libraries
listed bellow.

* Java - Apache jclouds
* Ruby - Apache Deltacloud, Fog
* Node.js - pkgcloud

# History

Libcloud was originally developed in 2009 at Cloudkick to solve a problem of
talking to multiple different cloud provider APIs.

Later that year, the project joined Apache Incubator and in May of 2011,
the project graduated from the incubator to a top level project.

For a full timeline of the events and exact dates, please see the section
bellow.

# Important Dates and Milestones

* Summer 2009 - Libcloud development starts at Cloudkick.
* November 11th, 2009 - Project enters Apache Incubator.
* March 22nd, 2011 - Website has been ported to Apache CMS.
* May 10th, 2010 - First Apache release (0.3.1) is out
* May 19th, 2011 - Project graduates to a top level project
* May 25, 2011 - Libcloud 0.5.0 which moves away from comGApute only and includes
  support for object storage and loadbalancers API is released
* November 5th, 2011 - Libcloud 0.6.0 which includes support for a new DNS
  API is released
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
