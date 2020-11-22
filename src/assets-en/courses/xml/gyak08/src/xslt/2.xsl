<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:cd="http://iit.uni-miskolc.hu/xml/catalog">
  
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  
  <xsl:variable name="title" as="xs:string">CD Catalog</xsl:variable>
  
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
        <xsl:apply-templates select="cd:catalog"/>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/cd:catalog">
    <xsl:element name="table">
      <xsl:element name="tr">
        <xsl:element name="th">Id</xsl:element>
        <xsl:element name="th">Title</xsl:element>
        <xsl:element name="th">Artist</xsl:element>
        <xsl:element name="th">Country</xsl:element>
        <xsl:element name="th">Company</xsl:element>
        <xsl:element name="th">Price</xsl:element>
        <xsl:element name="th">Year</xsl:element>
        <xsl:element name="th">Bonus?</xsl:element>
      </xsl:element>
      <xsl:apply-templates select="cd:cd"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/cd:catalog/cd:cd">
    <xsl:element name="tr">
      <xsl:element name="td">
        <xsl:value-of select="@id"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:title"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:artist"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:country"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:company"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:price"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:value-of select="cd:year"/>
      </xsl:element>
      <xsl:element name="td">
        <xsl:choose>
          <xsl:when test="@bonus">yes</xsl:when>
          <xsl:otherwise>no</xsl:otherwise>
        </xsl:choose>
        <!--
        VAGY:
        <xsl:if test="@bonus">yes</xsl:if>
        <xsl:if test="not(@bonus)">no</xsl:if>
        -->
      </xsl:element>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>