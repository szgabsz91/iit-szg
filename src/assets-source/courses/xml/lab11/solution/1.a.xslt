<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ns="NS">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <xsl:apply-templates select="ns:cars"/>
  </xsl:template>

  <xsl:template match="/ns:cars">
    <ns:autok>
      <xsl:apply-templates select="ns:car"/>
    </ns:autok>
  </xsl:template>

  <xsl:template match="/ns:cars/ns:car">
    <ns:auto>
      <xsl:attribute name="id" select="@id"/>

      <xsl:apply-templates select="ns:manufacturer"/>
      <xsl:apply-templates select="ns:color"/>
      <xsl:apply-templates select="ns:price"/>
    </ns:auto>
  </xsl:template>

  <xsl:template match="/ns:cars/ns:car/ns:manufacturer">
    <ns:gyarto>
      <xsl:attribute name="csoport" select="@group"/>
      <xsl:value-of select="."/>
    </ns:gyarto>
  </xsl:template>

  <xsl:template match="/ns:cars/ns:car/ns:color">
    <ns:szin>
      <xsl:value-of select="."/>
    </ns:szin>
  </xsl:template>

  <xsl:template match="/ns:cars/ns:car/ns:price">
    <ns:ar>
      <xsl:value-of select="."/>
    </ns:ar>
  </xsl:template>

</xsl:stylesheet>
