<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema">
  
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  
  <xsl:variable name="title" as="xs:string">Cars</xsl:variable>
  
  <xsl:template match="/">
    <xsl:element name="html">
      <xsl:element name="head">
        <xsl:element name="title">
          <xsl:value-of select="$title"/>
        </xsl:element>
      </xsl:element>
      <xsl:element name="body">
        <xsl:element name="h1">
          <xsl:value-of select="$title"/>
        </xsl:element>
        <xsl:apply-templates select="cars"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/cars">
    <xsl:element name="table">
      <xsl:element name="tr">
        <xsl:element name="th">Manufacturer</xsl:element>
        <xsl:element name="th">Price</xsl:element>
      </xsl:element>
      <xsl:apply-templates select="car"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/cars/car">
    <xsl:element name="tr">
      <xsl:attribute name="style">color: <xsl:value-of select="color"/></xsl:attribute>
      <xsl:element name="td">
        <xsl:value-of select="manufacturer"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="price"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>