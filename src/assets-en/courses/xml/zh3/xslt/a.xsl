<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:element name="html">
      <xsl:element name="head">
        <xsl:element name="title">Hallgatók</xsl:element>
      </xsl:element>
      <xsl:element name="body">
        <xsl:apply-templates select="hallgatoDB"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/hallgatoDB">
    <xsl:element name="table">
      <xsl:element name="tr">
        <xsl:element name="th">Neptun-kód</xsl:element>
        <xsl:element name="th">Név</xsl:element>
        <xsl:element name="th">Születési év</xsl:element>
        <xsl:element name="th">Telefonszám</xsl:element>
      </xsl:element>
      <xsl:apply-templates select="hallgato"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/hallgatoDB/hallgato">
    <xsl:element name="tr">
      <xsl:element name="td">
        <xsl:value-of select="@neptun"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="nev"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="szuletesi-ev"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="telefonszam/@korzet"/>
        <xsl:text>/</xsl:text>
        <xsl:value-of select="telefonszam"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>