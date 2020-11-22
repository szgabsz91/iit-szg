<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:fn="http://iit.uni-miskolc.hu/xml/xslt/functions">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <results>
      <result>
        <xsl:value-of select="fn:fibonacci(0)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:fibonacci(1)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:fibonacci(2)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:fibonacci(3)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:fibonacci(4)"/>
      </result>
      
      <result>
        <xsl:value-of select="fn:fibonacci(5)"/>
      </result>
    </results>
  </xsl:template>
  
  <xsl:function name="fn:fibonacci" as="xs:integer">
    <xsl:param name="index" as="xs:integer"/>
    
    <xsl:choose>
      <xsl:when test="$index = 0">
        <xsl:value-of select="$index"/>
      </xsl:when>
      
      <xsl:when test="$index = 1">
        <xsl:value-of select="$index"/>
      </xsl:when>
      
      <xsl:otherwise>
        <xsl:value-of select="fn:fibonacci($index - 1) + fn:fibonacci($index - 2)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:function>
  
</xsl:stylesheet>