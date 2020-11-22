<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:fn="http://iit.uni-miskolc.hu/xml/xslt/functions">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <results>
      <result>
        <xsl:value-of select="fn:factorial(0)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:factorial(1)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:factorial(2)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:factorial(3)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:factorial(4)"/>
      </result>
    </results>
  </xsl:template>
  
  <xsl:function name="fn:factorial" as="xs:integer">
    <xsl:param name="n" as="xs:integer"/>
    
    <xsl:choose>
      <xsl:when test="$n = 0">
        <xsl:value-of select="1"/>
      </xsl:when>
      
      <xsl:otherwise>
        <xsl:value-of select="$n * fn:factorial($n - 1)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:function>
  
</xsl:stylesheet>