---
layout: page
title: Downloads
---

# {{ page.title }}

This page contains link to the latest stable release of Libcloud. If you are
interested in an older release, please visit the [archive page][15].

## Libcloud 0.13.2 - Released on September 18th, 2013

Files:

* [apache-libcloud-0.13.2.tar.gz][2] [[asc][3]] [[sha1][4]] [[md5][5]]
* [apache-libcloud-0.13.2.tar.gz][6] [[asc][7]] [[sha1][8]] [[md5][9]]
* [apache-libcloud-0.13.2.tar.gz][10] [[asc][11]] [[sha1][12]] [[md5][13]]

Upgrade notes: [Click][16]

You are strongly encouraged to verify those packages using the [Apache Libcloud
developers KEYS][14]. You can find information on how to do that in the
"Quick package verification guide" section bellow.

## Distribution specific packages

Libcloud is also available in standard repositories of many popular Linux
distributions.

* Ubuntu, Debian (apt) - `python-libcloud`
* Fedora (yum) - `python-libcloud`
* FreeBSD (ports) - `ports/net/py-libcloud`

Keep in mind that distribution packages may be out of date. If you want to make
sure that you are using the latest version, you should install it by downloading
the archive from this page or using pip.

## Old releases

Old releases can be found in the archive at [http://www.apache.org/dist/libcloud/][15].

## Quick package verification guide

This section contains quick instructions on how to validate the release PGP
signatures.

1. Download the `KEYS` file from the Apache website

{% highlight bash %}
wget http://www.apache.org/dist/libcloud/KEYS
{% endhighlight %}

It is very important to only download `KEYS` file from the Apache server which
is mentioned above.

2.. Import KEYS file

   {% highlight bash %}
   gpg --import KEYS
   gpg: key 42721F00: public key "Paul Querna <...>" imported
   gpg: Total number processed: 1
   gpg:               imported: 1
   gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
   gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
   gpg: next trustdb check due at 2011-10-30</pre>
   {% endhighlight %}

2.. Verify package with `.asc` signature file

{% highlight bash %}
gpg --verify apache-libcloud-0.13.2.tar.bz2.asc
gpg: Signature made Wed Oct  6 15:31:35 2010 CDT using DSA key ID 42721F00
gpg: Good signature from "Paul Querna <...>"
gpg:                 aka "Paul Querna <...>"
gpg:                 ...</span>
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 39F6 691A 0ECF 0C50 E8BB  849C F788 75F6 4272 1F00
{% endhighlight %}

Example of a bad signature:

{% highlight bash %}
gpg --verify apache-libcloud-0.13.2.tar.bz2.asc
gpg: Signature made Wed Oct  6 15:31:35 2010 CDT using DSA key ID 42721F00
gpg: BAD signature from "Paul Querna &lt;...&gt;"
{% endhighlight %}

[1]: {{ page.url }}
[2]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.gz
[3]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.gz.asc
[4]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.gz.sha1
[5]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.gz.md5
[6]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.bz2
[7]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.bz2.asc
[8]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.bz2.sha1
[9]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.tar.bz2.md5
[10]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.zip
[11]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.zip.asc
[12]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.zip.sha1
[13]: http://www.apache.org/dist/libcloud/apache-libcloud-0.13.2.zip.md5
[14]: http://www.apache.org/dist/libcloud/KEYS
[15]: http://www.apache.org/dist/libcloud/
[16]: https://libcloud.readthedocs.org/en/latest/upgrade_notes.html
