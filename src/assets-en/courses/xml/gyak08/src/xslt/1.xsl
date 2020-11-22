<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:apply-templates select="cars"/>  
  </xsl:template>
  
  <xsl:template match="/cars">
    <autok>
      <xsl:apply-templates select="car"/>
    </autok>
  </xsl:template>
  
  <xsl:template match="/cars/car">
    <auto>
      <xsl:apply-templates select="manufacturer"/>
      <xsl:apply-templates select="color"/>
      <xsl:apply-templates select="price"/>
      <!--
      VAGY (ennel a megoldasnal nem kell a tobbi template):
      <gyarto>
        <xsl:value-of select="manufacturer"/>
      </gyarto>
      <szin>
        <xsl:value-of select="color"/>
      </szin>
      <ar>
        <xsl:value-of select="price"/>
      </ar>
      -->
    </auto>
  </xsl:template>
  
  <xsl:template match="/cars/car/manufacturer">
    <gyarto>
      <xsl:value-of select="."/>
    </gyarto>
  </xsl:template>
  
  <xsl:template match="/cars/car/color">
    <szin>
      <xsl:value-of select="."/>
    </szin>
  </xsl:template>
  
  <xsl:template match="/cars/car/price">
    <ar>
      <xsl:value-of select="."/>
    </ar>
  </xsl:template>
  
</xsl:stylesheet>