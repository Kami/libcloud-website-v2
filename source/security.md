---
layout: page
title: Security
---

# {{ page.title }}

<a name="security-vulnerabilities"><h2 class="anchor">Security Vulnerabilities</h2></a>

<a name="CVE-2012-3446"><h3 class="anchor">[CVE-2012-3446] Possible SSL MITM due to invalid regular expression used to validate the target server hostname</h3></a>

**Severity**: Medium  
**Affected Versions**: Apache Libcloud 0.4.2 to 0.11.1 (version prior to 0.4.2
don't preform any target SSL certificate validation)  
**Description**:

When establishing a secure (SSL / TLS) connection to a target server an
invalid regular expression has been used for performing the hostname
verification. Subset instead of the full target server hostname has been
marked as an acceptable match for the given hostname.

For example, certificate with a hostname field of `aexample.com` was considered
a valid certificate for domain `example.com`.

**Mitigation**:

This vulnerability has been fixed in version 0.11.1 so all the users should
upgrade to version 0.11.1 or higher.

**Credits**:

This issue was discovered by researchers from the University of Texas at Austin
(Martin Georgiev, Suman Jana and Vitaly Shmatikov).

<a name="CVE-2010-4340"><h3 class="anchor">[CVE-2010-4340] SSL MITM vulnerability</h3></a>

**Severity**: Medium  
**Affected versions**: All the versions prior to **0.4.2**  
**Description**:

Python SSL library doesn't validate a host SSL certificate and as a
consequence, versions prior to **0.4.2** are vulnerable to a man-in-the-middle
attack.

**Mitigation**:

This vulnerability has been fixed in the version 0.4.2. You are strongly
encouraged to upgrade to this version and set
`libcloud.security.VERIFY_SSL_CERT` variable to `True`.

<a name="reporting-a-vulnerability"><h2 class="anchor">Reporting a Vulnerability</h2></a>

<div class="alert alert-info">Please do <strong>not</strong> report security
issues using our public JIRA instance. Use the private mailing list
described bellow.</div>

If you believe you found a security issue or a vulnerability, please send a
description of it to our private mailing list at
[security@libcloud.apache.org][3].

You are also encouraged to encrypt this email using PGP. Keys of our developers
can be found at [https://www.apache.org/dist/libcloud/KEYS][4].

Once you've submitted an issue, you should receive an acknowledgment from one
our of team members in 48 hours or less. If further action is necessary, you
may receive additional follow-up emails.

<a name="how-are-vulnerabilities-handled"><h2 class="anchor">How are vulnerabilities handled?</h2></a>

We follow a standard Apache Software Foundation vulnerability handling process
which is described at
[http://www.apache.org/security/committers.html#vulnerability-handling][5].

<a name="errors-and-omissions"><h2 class="anchor">Errors and Omissions</h2></a>

Please report any errors or omissions to
<a href="mailto:security@libcloud.apache.org">security@libcloud.apache.org</a>.

[1]: {{ page.url }}
[2]: https://libcloud.readthedocs.org/en/latest/security.html#reporting-a-vulnerability
[3]: mailto:security@libcloud.apache.org
[4]: https://www.apache.org/dist/libcloud/KEYS
[5]: http://www.apache.org/security/committers.html#vulnerability-handling
