---
layout: page
title: Safe opensource
permalink: /table/
---

 <table>
  {% for row in site.data.result %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}

{% endfor %}

</table>

Visit our site [опенсорсбезугроз.рф](https://опенсорсбезугроз.рф/)
