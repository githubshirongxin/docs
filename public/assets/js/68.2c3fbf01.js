(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{541:function(e,r,a){"use strict";a.r(r);var t=a(55),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"资源："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源："}},[e._v("#")]),e._v(" 资源：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("查看npm包 https://developer.aliyun.com/mirror/NPM?from=tnpm")])]),e._v(" "),a("li",[a("p",[e._v("查看maven包 https://search.maven.org/")])]),e._v(" "),a("li",[a("p",[e._v("快速地通读全文，用不了2个小时。整体都理解了之后再memo。\nhttps://maven.apache.org/guides/getting-started/index.html")])]),e._v(" "),a("li",[a("p",[e._v("maven有很多插件，有时间可以试试\nhttps://maven.apache.org/plugins/index.html")])]),e._v(" "),a("li",[a("p",[e._v("pom\nhttps://maven.apache.org/guides/introduction/introduction-to-the-pom.html")])]),e._v(" "),a("li",[a("p",[e._v("配置plugins\nhttps://maven.apache.org/guides/mini/guide-configuring-plugins.html")])]),e._v(" "),a("li",[a("p",[e._v("库\nhttps://maven.apache.org/guides/introduction/introduction-to-repositories.html")])]),e._v(" "),a("li",[a("p",[e._v("指向自定义库\nhttps://maven.apache.org/guides/mini/guide-mirror-settings.html")])])]),e._v(" "),a("h2",{attrs:{id:"一，最常用的maven功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一，最常用的maven功能"}},[e._v("#")]),e._v(" 一，最常用的maven功能")]),e._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 1，编译所有代码\nmvn compile\n\n// 2，编译测试代码，并运行测试用例\nmvn test\n\n// 仅仅编译测试代码\nmvn test-compile \n\n// 3，生成jar或war\nmvn package\n\n// 4，把生成的jar安装到自己的本地库（${user.home}/.m2/repository ）, 编译→测试→打包到本地库\nmvn install\n\n// 生成一个maven风格的站点，描述你的项目，自动生成内容\nmvn site\n\n// 删除构建的target目录的内容\nmvn clean \n\n// 生成项目依赖树\nmvn dependency:tree\n")])])]),a("p",[e._v("https://maven.apache.org/run-maven/index.html\n//不仅build而且还check所有的整合测试是否成功。\n"),a("code",[e._v("mvn verify")])]),e._v(" "),a("p",[e._v("// 先删除然后编译且检查\n"),a("code",[e._v("mvn clean verify")])]),e._v(" "),a("h3",{attrs:{id:"查看java版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看java版本"}},[e._v("#")]),e._v(" 查看java版本")]),e._v(" "),a("p",[e._v("// 下面定义java版本是1.5")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<build>\n  <plugins>\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-compiler-plugin</artifactId>\n      <version>3.3</version>\n      <configuration>\n        <source>1.5</source> \n        <target>1.5</target>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>\n")])])]),a("h2",{attrs:{id:"二，资源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二，资源文件"}},[e._v("#")]),e._v(" 二，资源文件")]),e._v(" "),a("p",[e._v("// 将资源放到main的resource下，就会打包到jar里\n// 将资源放到test的resource下，在单元测试中，使用代码可以访问到这些资源，例如都属性文件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("my-app\n|-- pom.xml\n`-- src\n    |-- main\n    |   |-- java\n    |   |   `-- com\n    |   |       `-- mycompany\n    |   |           `-- app\n    |   |               `-- App.java\n    |   `-- resources\n    |       `-- META-INF\n    |           |-- application.properties\n    `-- test\n        |-- java\n        |   `-- com\n        |       `-- mycompany\n        |           `-- app\n        |               `-- AppTest.java\n        `-- resources\n            `-- test.properties\n")])])]),a("h2",{attrs:{id:"资源文件中引用其他属性的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源文件中引用其他属性的方法"}},[e._v("#")]),e._v(" 资源文件中引用其他属性的方法")]),e._v(" "),a("p",[e._v("当然可以直接定义，但是也可以引用其他地方定义好的【属性-值】\n验证方式：target/下的application.properties查看对应的值。")]),e._v(" "),a("h3",{attrs:{id:"_1-使用pom-xml或setting-xml设置的变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用pom-xml或setting-xml设置的变量值"}},[e._v("#")]),e._v(" 1. 使用pom.xml或setting.xml设置的变量值")]),e._v(" "),a("p",[e._v("//资源文件中能够使用${property name}\n// 这些property 可能设置在setting.xml , pom.xml ，甚至环境变量\n// 但是\n// 有个前提。就是pom.xml中必须设置filter = true\n// 否则，这些属性传递不到属性文件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   <build>\n        <resources>\n            <resource>\n                <directory>src/main/resources</directory>\n                <filtering>true</filtering>\n            </resource>\n        </resources>\n")])])]),a("h3",{attrs:{id:"_2-引用外部文件（非resources）设置变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用外部文件（非resources）设置变量值"}},[e._v("#")]),e._v(" 2. 引用外部文件（非resources）设置变量值")]),e._v(" "),a("p",[e._v("// 要引用外部文件\n// 必须在pom中引用它\nsrc/main/filters/filter.properties:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# filter.properties\nmy.filter.value=hello!\n")])])]),a("p",[e._v("pom.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" <build>\n    <filters>\n      <filter>src/main/filters/filter.properties</filter>\n    </filters>\n    <resources>\n      <resource>\n        <directory>src/main/resources</directory>\n        <filtering>true</filtering>\n      </resource>\n    </resources>\n  </build>\n</project>\n")])])]),a("p",[e._v("application.properties")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# application.properties\napplication.name=${project.name}\napplication.version=${project.version}\nmessage=${my.filter.value}\n")])])]),a("p",[e._v("然后执行 "),a("code",[e._v("mvn process-resources")]),e._v("\n在target/src/main/resource/application.properties中查看")]),e._v(" "),a("h3",{attrs:{id:"_3-pom-xml-properties中设置变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pom-xml-properties中设置变量值"}},[e._v("#")]),e._v(" 3. pom.xml properties中设置变量值")]),e._v(" "),a("p",[e._v("当然，也可以在pom.xml中引用这个filter.properties中的变量")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<build>\n    <resources>\n      <resource>\n        <directory>src/main/resources</directory>\n        <filtering>true</filtering>\n      </resource>\n    </resources>\n  </build>\n \n  <properties>\n    <my.filter.value>hello srx!</my.filter.value>\n  </properties>\n</project>\n")])])]),a("p",[e._v("这个变量值的设置会优先filter.properties中对变量值的设置。\n然后执行 "),a("code",[e._v("mvn process-resources")]),e._v(",target/下的application.properties中的该值，会变成hello srx!而不是hello")]),e._v(" "),a("h3",{attrs:{id:"_4-从命令行获得变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-从命令行获得变量值"}},[e._v("#")]),e._v(" 4. 从命令行获得变量值")]),e._v(" "),a("p",[e._v("application.properties")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# application.properties\njava.version=${java.version}\ncommand.line.prop=${command.line.prop}\n")])])]),a("p",[a("code",[e._v('mvn process-resources "-Dcommand.line.prop=hello again"')])]),e._v(" "),a("h2",{attrs:{id:"三，如何在远程存储库中部署我的jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三，如何在远程存储库中部署我的jar"}},[e._v("#")]),e._v(" 三，如何在远程存储库中部署我的jar")]),e._v(" "),a("p",[e._v("要将jar部署到外部存储库，必须在pom.xml中配置存储库url，\n并在settings.xml中配置用于连接到存储库的认证信息。\n"),a("strong",[e._v("pom.xml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" <distributionManagement>\n    <repository>\n      <id>mycompany-repository</id>\n      <name>MyCompany Repository</name>\n      <url>scp://repository.mycompany.com/repository/maven2</url>\n    </repository>\n  </distributionManagement>\n</project>\n")])])]),a("p",[a("strong",[e._v("setting.xml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<settings>\n <servers>\n    <server>\n      <id>mycompany-repository</id>\n      <username>jvanzyl</username>\n      \x3c!-- Default value is ~/.ssh/id_dsa --\x3e\n      <privateKey>/path/to/identity</privateKey> (default is ~/.ssh/id_dsa)\n      <passphrase>my_key_passphrase</passphrase>\n    </server>\n  </servers>\n...\n</settings>\n")])])]),a("p",[e._v("Care should be taken if using passwords in settings.xml.\nFor more information, see "),a("a",{attrs:{href:"https://maven.apache.org/guides/mini/guide-encryption.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Password Encryption"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);r.default=n.exports}}]);