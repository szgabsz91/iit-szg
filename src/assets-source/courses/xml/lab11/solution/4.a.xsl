<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:ns="NS"
                exclude-result-prefixes="xsd ns">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <result>
      <xsl:call-template name="area">
        <xsl:with-param name="a">3</xsl:with-param>
        <xsl:with-param name="b">4</xsl:with-param>
      </xsl:call-template>
    </result>
  </xsl:template>

  <xsl:template name="area" as="xsd:double">
    <xsl:param name="a" as="xsd:double"/>
    <xsl:param name="b" as="xsd:double"/>
    <xsl:value-of select="$a * $b"/>
  </xsl:template>

</xsl:stylesheet>
