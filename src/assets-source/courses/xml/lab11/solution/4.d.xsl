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
        <xsl:value-of select="ns:fibonacci(0)"/>
      </result>

      <result>
        <xsl:value-of select="ns:fibonacci(1)"/>
      </result>

      <result>
        <xsl:value-of select="ns:fibonacci(2)"/>
      </result>

      <result>
        <xsl:value-of select="ns:fibonacci(3)"/>
      </result>

      <result>
        <xsl:value-of select="ns:fibonacci(4)"/>
      </result>

      <result>
        <xsl:value-of select="ns:fibonacci(5)"/>
      </result>
    </results>
  </xsl:template>

  <xsl:function name="ns:fibonacci" as="xsd:integer">
    <xsl:param name="i" as="xsd:integer"/>

    <xsl:choose>
      <xsl:when test="$i = 0">
        <xsl:value-of select="$i"/>
      </xsl:when>

      <xsl:when test="$i = 1">
        <xsl:value-of select="$i"/>
      </xsl:when>

      <xsl:otherwise>
        <xsl:value-of select="ns:fibonacci($i - 1) + ns:fibonacci($i - 2)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:function>

</xsl:stylesheet>
