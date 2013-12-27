---
layout: page
title: Credits
description: See a list of Libcloud team members and people who have contributed to the project.
---

# {{ page.title }}

This page lists Libcloud team members and all the people who have contributed
have contributed to the project and are recorded in the CHANGES file.

<a name="thanks"><h2 class="anchor">Thanks</h2></a>

We would like to thank each and every person who has contributed to Libcloud in
any form (be it a code change, documentation change, bug fix, typo fix,
feature suggestion or similar).

<a name="team-members"><h2 class="anchor">Team Members</h2></a>

<div class="row section member">
  <div class="col-md-8">
    {{ "briancurtin@apache.org" | gravatar }}
    <p>Brian Curtin<br />
    Committer<br />
    briancurtin [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "woodset@apache.org" | gravatar }}
    <p>Eric Woods<br />
    PMC Member, Committer<br />
    woodser [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "hbetts@apache.org" | gravatar }}
    <p>Hutson Betts<br />
    Committer<br />
    hbetts [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "ilgiz@apache.org" | gravatar }}
    <p>Ilgiz Islamgulov<br />
    Committer<br />
    ilgiz [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "oremj@apache.org" | gravatar }}
    <p>Jeremiah Orem<br />
    PMC Member, Committer<br />
    oremj [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "jerry@apache.org" | gravatar }}
    <p>Jerry Chen<br />
    PMC Member, Committer<br />
    jerry [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "johnmdcarr@apache.org" | gravatar }}
    <p>John Carr<br />
    PMC Member, Committer<br />
    johnmdcarr [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "mahendra@apache.org" | gravatar }}
    <p>Mahendra Maheshwara<br />
    Committer<br />
    mahendra [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "rbogorodskiy@apache.org" | gravatar }}
    <p>Roman Bogorodskiy<br />
    PMC Member, Committer<br />
    rbogorodskiy [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "tom@apache.org" | gravatar }}
    <p>Tom Davis<br />
    PMC Member, Committer<br />
    tom [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "tomaz@apache.org" | gravatar }}
    <p>Tomaz Muraus<br />
    PMC Member, Committer, Chair<br />
    tomaz [at] apache [dot] org
    </p>
  </div>
</div>

<div class="row section member">
  <div class="col-md-8">
    {{ "pquerna@apache.org" | gravatar }}
    <p>Paul Querna<br />
    PMC member, Committer<br />
    pquerna [at] apache [dot] org
    </p>
  </div>
</div>

<a name="alumni"><h2 class="anchor">Alumni</h2></a>

* Alex Polvi (original Libcloud developer and founder)
* Dan Di Spaltro (committer)
* Ivan Meredith (committer)
* Jed Smith (committer, PMC member)

<a name="contributors"><h2 class="anchor">Contributors</h2></a>

This section lists all the people who have contributed code or a documentation
change to Libcloud. It's automatically generated from the [CHANGES][3] file so
it might not be 100% accurate. If you have contributed, but your name is
missing from this list, we would like to apologize and thank you again for
your contribution!

All the names are sorted in an alphabetical order based on the contributor's
last name.

{% capture content %}
{% include contributors.md %}
{% endcapture %}

{{ content | markdownify }}

If there is no JIRA ticket number or Github pull request number next to
someone's name, this simply means that a changelog line didn't reference it.

[1]: {{ page.url }}
[2]: https://issues.apache.org/jira/secure/ConfigureReport.jspa?atl_token=888af46eb9686dcb98b6e5c7489395dfb195f02c&versionId=-1&issueStatus=closed&selectedProjectId=12311030&reportKey=com.sourcelabs.jira.plugin.report.contributions%3Acontributionreport&Next=Next).
[3]: https://github.com/apache/libcloud/blob/trunk/CHANGES
