<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:fn="http://iit.uni-miskolc.hu/xml/xslt/functions">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <results>
      <result>
        <xsl:call-template name="terulet">
          <xsl:with-param name="a">3</xsl:with-param>
          <xsl:with-param name="b">4</xsl:with-param>
        </xsl:call-template>
      </result>
      
      <result>
        <xsl:value-of select="fn:terulet(3, 4)"/>
      </result>
    </results>
  </xsl:template>
  
  <xsl:template name="terulet" as="xs:double">
    <xsl:param name="a" as="xs:double"/>
    <xsl:param name="b" as="xs:double"/>
    <xsl:value-of select="$a * $b"/>
  </xsl:template>
  
  <xsl:function name="fn:terulet">
    <xsl:param name="a" as="xs:double"/>
    <xsl:param name="b" as="xs:double"/>
    <xsl:value-of select="$a * $b"/>
  </xsl:function>
  
</xsl:stylesheet>