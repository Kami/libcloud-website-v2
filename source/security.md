---
layout: page
title: Security
---

# {{ page.title }}

## Security Vulnerabilities

### [CVE-2012-3446] Possible SSL MITM due to invalid regular expression used to validate the target server hostname

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

### [CVE-2010-4340] SSL MITM vulnerability

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

## Reporting a Vulnerability

For information on how to report a vulnerability, please see [Reporting a
vulnerability][2] documentation page.

## Errors and Omissions

Please report any errors or omissions to
<a href="mailto:security@libcloud.apache.org">security@libcloud.apache.org</a>.

[1]: {{ page.url }}
[2]: https://libcloud.readthedocs.org/en/latest/security.html#reporting-a-vulnerability
