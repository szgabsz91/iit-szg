<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:ns="NS"
                exclude-result-prefixes="xsd ns">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <result>
      <xsl:value-of select="ns:area(3, 4)"/>
    </result>
  </xsl:template>

  <xsl:function name="ns:area">
    <xsl:param name="a" as="xsd:double"/>
    <xsl:param name="b" as="xsd:double"/>
    <xsl:value-of select="$a * $b"/>
  </xsl:function>

</xsl:stylesheet>
