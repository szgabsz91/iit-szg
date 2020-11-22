<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:element name="catalog">
      <xsl:apply-templates select="catalog"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/catalog">
    <xsl:for-each-group select="cd" group-by="year">
      <xsl:sort select="year"/>
      
      <xsl:element name="year">
        <xsl:attribute name="year">
          <xsl:value-of select="current-grouping-key()"/>
        </xsl:attribute>
        
        <xsl:for-each select="current-group()">
          <xsl:sort select="@id" order="descending"/>
          <xsl:copy-of select="."/>
        </xsl:for-each>
      </xsl:element>
    </xsl:for-each-group>
  </xsl:template>
  
</xsl:stylesheet>