<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:element name="html">
      <xsl:element name="head">
        <xsl:element name="title">Autók</xsl:element>
      </xsl:element>
      <xsl:element name="body">
        <xsl:apply-templates select="autoDB"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/autoDB">
    <xsl:element name="table">
      <xsl:element name="tr">
        <xsl:element name="th">Rendszám</xsl:element>
        <xsl:element name="th">Márka</xsl:element>
        <xsl:element name="th">Gyártási év</xsl:element>
        <xsl:element name="th">Szín</xsl:element>
        <xsl:element name="th">Metálozott</xsl:element>
      </xsl:element>
      <xsl:apply-templates select="auto"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/autoDB/auto">
    <xsl:element name="tr">
      <xsl:element name="td">
        <xsl:value-of select="@rendszam"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="marka"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="gyartasi-ev"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="szin"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:choose>
          <xsl:when test="szin/@metalozott">igen</xsl:when>
          <xsl:otherwise>nem</xsl:otherwise>
        </xsl:choose>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>