<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:oraxsl="http://www.oracle.com/XSL/Transform/java"
                xmlns:DVMFunctions="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.functions.dvm.DVMFunctions"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:BasicCredentialsUserFunction="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.stages.functions.BasicCredentialsUserFunction"
                xmlns:ns0="http://www.ibm.com/FazerMiojoRequest/XSD"
                xmlns:UUIDUserFunction="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.stages.functions.UUIDUserFunction"
                xmlns:oracle-xsl-mapper="http://www.oracle.com/xsl/mapper/schemas"
                xmlns:tns="http://www.ibm.com/FazerMiojoResponse/XSD" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:IsUserInRoleFunction="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.stages.functions.IsUserInRoleFunction"
                xmlns:IsUserInGroupFunction="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.stages.functions.IsUserInGroupFunction"
                xmlns:XrefFunctions="http://www.oracle.com/XSL/Transform/java/com.bea.wli.sb.functions.xref.XrefFunctions"
                exclude-result-prefixes="xsd xsi oracle-xsl-mapper xsl ns0 tns oraxsl DVMFunctions BasicCredentialsUserFunction UUIDUserFunction IsUserInRoleFunction IsUserInGroupFunction XrefFunctions"
                xmlns:ns1="http://www.example.org">
  <oracle-xsl-mapper:schema>
    <!--SPECIFICATION OF MAP SOURCES AND TARGETS, DO NOT MODIFY.-->
    <oracle-xsl-mapper:mapSources>
      <oracle-xsl-mapper:source type="XSD">
        <oracle-xsl-mapper:schema location="../XSD/FazerMiojo.Operacao.Request.xsd"/>
        <oracle-xsl-mapper:rootElement name="Request" namespace="http://www.ibm.com/FazerMiojoRequest/XSD"/>
      </oracle-xsl-mapper:source>
    </oracle-xsl-mapper:mapSources>
    <oracle-xsl-mapper:mapTargets>
      <oracle-xsl-mapper:target type="XSD">
        <oracle-xsl-mapper:schema location="../XSD/FazerMiojo.Operacao.Response.xsd"/>
        <oracle-xsl-mapper:rootElement name="Response" namespace="http://www.ibm.com/FazerMiojoResponse/XSD"/>
      </oracle-xsl-mapper:target>
    </oracle-xsl-mapper:mapTargets>
    <!--GENERATED BY ORACLE XSL MAPPER 12.1.3.0.0(XSLT Build 140529.0700.0211) AT [THU JUL 23 16:15:17 BRT 2020].-->
  </oracle-xsl-mapper:schema>
  <!--User Editing allowed BELOW this line - DO NOT DELETE THIS LINE-->
  <xsl:variable name="Cooking" select="/ns0:Request/ns0:Cooking"/>
  <xsl:variable name="Glass1" select="/ns0:Request/ns0:HourGlass1"/>
  <xsl:variable name="Glass2" select="/ns0:Request/ns0:HourGlass2"/>
  <xsl:template match="/">
    <tns:Response>
      <tns:Relatorio>
        <tns:YourName>
          <xsl:value-of select="/ns0:Request/ns0:YourName"/>
        </tns:YourName>
        <tns:TempoAmpulhetas>
          <tns:HourGlass1>
            <xsl:value-of select="/ns0:Request/ns0:HourGlass1"/>
          </tns:HourGlass1>
          <tns:HourGlass2>
            <xsl:value-of select="/ns0:Request/ns0:HourGlass2"/>
          </tns:HourGlass2>
        </tns:TempoAmpulhetas>
        <tns:TempoCozimentoMiojo>
          <tns:Cooking>
            <xsl:value-of select="/ns0:Request/ns0:Cooking"/>
          </tns:Cooking>
        </tns:TempoCozimentoMiojo>
        <xsl:choose>
          <xsl:when test="$Glass1 > $Glass2">
            <tns:TempoTotalPreparo>
              <tns:TotalCooking>  
              <xsl:value-of select="sum($Glass1,$Cooking)"/>         
              </tns:TotalCooking>
            </tns:TempoTotalPreparo>
          </xsl:when>
          <xsl:otherwise>
            <tns:TempoTotalPreparo>
              <tns:TotalCooking>
                <xsl:value-of select="sum($Glass2,$Cooking)"/>
              </tns:TotalCooking>
            </tns:TempoTotalPreparo>
          </xsl:otherwise>
        </xsl:choose>
        <xsl:choose>
          <xsl:when test="$Glass1 > $Glass2">
            <tns:NumeroInteracoes>
              <tns:Count>
                <xsl:value-of select="(sum ($Glass1, $Cooking)) div $Glass2"/>
              </tns:Count>
            </tns:NumeroInteracoes>
          </xsl:when>
          <xsl:otherwise>
            <tns:NumeroInteracoes>
              <tns:Count>
                <xsl:value-of select="(sum($Glass2,$Cooking)) div $Glass1"/>
              </tns:Count>
            </tns:NumeroInteracoes>
          </xsl:otherwise>
        </xsl:choose>
      </tns:Relatorio>
    </tns:Response>
  </xsl:template>
</xsl:stylesheet>
