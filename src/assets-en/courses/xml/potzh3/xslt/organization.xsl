<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
  <xsl:template match="/">
    <xsl:apply-templates select="organization"/>
  </xsl:template>
  
  <xsl:template match="/organization">
    <xsl:element name="szervezet">
      <xsl:apply-templates select="project"/>
      <xsl:apply-templates select="employee"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/organization/project">
    <xsl:element name="projekt">
      <xsl:attribute name="pazonosito">
        <xsl:value-of select="@pid"/>
      </xsl:attribute>
      
      <xsl:apply-templates select="name"/>
      <xsl:apply-templates select="member"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/organization/project/name">
    <xsl:element name="nev">
      <xsl:value-of select="text()"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/organization/project/member">
    <xsl:element name="tag">
      <xsl:value-of select="text()"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/organization/employee">
    <xsl:element name="alkalmazott">
      <xsl:attribute name="aazonosito">
        <xsl:value-of select="@eid"/>
      </xsl:attribute>
      
      <xsl:apply-templates select="name"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="/organization/employee/name">
    <xsl:element name="nev">
      <xsl:value-of select="text()"/>
    </xsl:element>
  </xsl:template>
  
</xsl:stylesheet>