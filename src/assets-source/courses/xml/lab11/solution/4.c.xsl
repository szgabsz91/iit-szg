<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:ns="NS"
                exclude-result-prefixes="xsd ns">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <results>
      <result>
        <xsl:value-of select="ns:factorial(0)"/>
      </result>

      <result>
        <xsl:value-of select="ns:factorial(1)"/>
      </result>

      <result>
        <xsl:value-of select="ns:factorial(2)"/>
      </result>

      <result>
        <xsl:value-of select="ns:factorial(3)"/>
      </result>

      <result>
        <xsl:value-of select="ns:factorial(4)"/>
      </result>
    </results>
  </xsl:template>

  <xsl:function name="ns:factorial" as="xsd:integer">
    <xsl:param name="n" as="xsd:integer"/>

    <xsl:choose>
      <xsl:when test="$n = 0">
        <xsl:value-of select="1"/>
      </xsl:when>

      <xsl:otherwise>
        <xsl:value-of select="$n * ns:factorial($n - 1)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:function>

</xsl:stylesheet>
