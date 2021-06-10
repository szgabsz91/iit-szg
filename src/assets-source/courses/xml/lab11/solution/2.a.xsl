<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:ns="NS">

  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:variable name="title" as="xsd:string">CD Catalog</xsl:variable>

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
        <xsl:apply-templates select="ns:catalog"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>

  <xsl:template match="/ns:catalog">
    <xsl:element name="table">
      <xsl:element name="tr">
        <xsl:element name="th">Id</xsl:element>
        <xsl:element name="th">Title</xsl:element>
        <xsl:element name="th">Artist</xsl:element>
        <xsl:element name="th">Country</xsl:element>
        <xsl:element name="th">Company</xsl:element>
        <xsl:element name="th">Price</xsl:element>
        <xsl:element name="th">Year</xsl:element>
        <xsl:element name="th">Has Discount</xsl:element>
      </xsl:element>
      <xsl:apply-templates select="ns:cd"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="/ns:catalog/ns:cd">
    <xsl:element name="tr">
      <xsl:element name="td">
        <xsl:value-of select="@id"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:title"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:artist"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:country"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:company"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:price"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="ns:year"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:choose>
          <xsl:when test="@discount">yes</xsl:when>
          <xsl:otherwise>no</xsl:otherwise>
        </xsl:choose>
      </xsl:element>
    </xsl:element>
  </xsl:template>

</xsl:stylesheet>
