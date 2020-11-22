<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/2000/svg">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:element name="svg">
      <xsl:attribute name="width">100%</xsl:attribute>
      <xsl:attribute name="height">100%</xsl:attribute>
      <xsl:apply-templates select="plane-figures"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/plane-figures">
    <xsl:element name="g">
      <xsl:attribute name="alignment-baseline">baseline</xsl:attribute>
      <xsl:apply-templates select="child::node()"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/plane-figures/circle">
    <xsl:element name="circle">
      <xsl:attribute name="r" select="radius"/>
      <xsl:attribute name="cx" select="position/x"/>
      <xsl:attribute name="cy" select="position/y"/>
      <xsl:attribute name="fill" select="color"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/plane-figures/square">
    <xsl:element name="rect">
      <xsl:attribute name="width" select="size"/>
      <xsl:attribute name="height" select="size"/>
      <xsl:attribute name="x" select="position/x"/>
      <xsl:attribute name="y" select="position/y"/>
      <xsl:attribute name="fill" select="color"/>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>