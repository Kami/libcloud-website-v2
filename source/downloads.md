---
layout: page_with_sidebar
title: Downloads
---

# {{ page.title }}

This page contains link to the latest stable release of Libcloud. If you are
interested in an older release, please visit the [archive page][15].

<a name="latest-stable-release" id="latest-stable-release"><h2 class="anchor">Libcloud 0.13.2 (stable) - Released on September 18th, 2013</h2></a>

Files:

* [apache-libcloud-0.13.2.tar.gz][2] [[asc][3]] [[sha1][4]] [[md5][5]]
* [apache-libcloud-0.13.2.tar.bz2][6] [[asc][7]] [[sha1][8]] [[md5][9]]
* [apache-libcloud-0.13.2.tar.zip][10] [[asc][11]] [[sha1][12]] [[md5][13]]

You are strongly encouraged to verify those packages using the [Apache Libcloud
developers KEYS][14]. You can find information on how to do that in the
"Quick package verification guide" section bellow.

<a name="latest-beta-release" id="latest-beta-release"><h2 class="anchor">Libcloud 0.14.0-beta3 (beta) - Released on November 21st, 2013</h2></a>

Files:

* [apache-libcloud-0.14.0-beta3.tar.gz][17] [[asc][18]] [[sha1][19]] [[md5][20]]
* [apache-libcloud-0.14.0-beta3.tar.bz2][21] [[asc][22]] [[sha1][23]] [[md5][24]]
* [apache-libcloud-0.14.0-beta3.tar.zip][25] [[asc][26]] [[sha1][27]] [[md5][28]]

Upgrade notes: [Click][29]

<a name="distribution-packages" id="distribution-packages"><h2 class="anchor">Distribution specific packages</h2></a>

Libcloud is also available in standard repositories of many popular Linux
distributions.

<a name="ubuntu-debian"><h3 class="anchor">Ubuntu, Debian (apt)</h3></a>

Package name: `python-libcloud`  
Installation:

{% highlight bash %}
apt-get install python-libcloud
{% endhighlight %}

<a name="feedora-redhat"><h3 class="anchor">Fedora, RedHat (yum)</h3></a>

Package name: `python-libcloud`  
Installation:

{% highlight bash %}
yum install python-libcloud
{% endhighlight %}

<a name="freebsd"><h3 class="anchor">FreeBSD (ports, packages)</h3></a>

Port name: `ports/net/py-libcloud`  
Installation:

{% highlight bash %}
cd /usr/ports/net/py-libcloud
make install clean
{% endhighlight %}

Package name: `py-libcloud`  
Installation:

{% highlight bash %}
pkg_add -r py27-libcloud
{% endhighlight %}

<a name="osx"><h3 class="anchor">OS X (MacPorts)</h3></a>

Port name: `py-libcloud`
Installation:

{% highlight bash %}
port installl py-libcloud
{% endhighlight %}

Keep in mind that distribution packages may be out of date. If you want to make
sure that you are using the latest version, you should install it by downloading
the archive from this page or using pip.

<a name="pypi-package" id="pypi-package"><h2 class="anchor">PyPi Package</h2></a>

The Python Package Index or PyPI is the official third-party software
repository for the Python programming language.

We push all the releases to PyPi so you can also download and install the
latest release using pip:

{% highlight bash %}
pip install apache-libcloud
{% endhighlight %}

Keep in mind that `pip install` command doesn't verify the package signatures,
so if you are worried about that, you should manually download the package and
verify the signature using the steps described bellow.

<a name="old-releases" id="old-releases"><h2 class="anchor">Old releases</h2></a>

Old releases can be found in the archive at [http://www.apache.org/dist/libcloud/][15].
We strongly recommend to not use those releases, but upgrade to the latest
release available.

<a name="package-verification-guide" id="package-verification-guide"><h2 class="anchor">Quick package verification guide</h2></a>

This section contains quick instructions on how to validate the release PGP
signatures.

1.. Download the `KEYS` file from the Apache website

{% highlight bash %}
wget https://www.apache.org/dist/libcloud/KEYS
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

3.. Verify package with `.asc` signature file

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
gpg: BAD signature from "Paul Querna <...>"
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
[14]: https://www.apache.org/dist/libcloud/KEYS
[15]: http://archive.apache.org/dist/libcloud/
[16]: https://libcloud.readthedocs.org/en/latest/upgrade_notes.html
[17]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.gz
[18]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.gz.asc
[19]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.gz.sha1
[20]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.gz.md5
[21]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.bz2
[22]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.bz2.asc
[23]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.bz2.sha1
[24]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.tar.bz2.md5
[25]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.zip
[26]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.zip.asc
[27]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.zip.sha1
[28]: http://www.apache.org/dist/libcloud/apache-libcloud-0.14.0-beta3.zip.md5
[29]: https://libcloud.readthedocs.org/en/latest/upgrade_notes.html#libcloud-0-14-0
