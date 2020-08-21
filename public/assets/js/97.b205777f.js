(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{579:function(s,n,a){"use strict";a.r(n);var e=a(59),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"资源："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源："}},[s._v("#")]),s._v(" 资源：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看npm包 https://developer.aliyun.com/mirror/NPM?from=tnpm")])]),s._v(" "),a("li",[a("p",[s._v("查看maven包 https://search.maven.org/")])]),s._v(" "),a("li",[a("p",[s._v("快速地通读全文，用不了2个小时。整体都理解了之后再memo。\nhttps://maven.apache.org/guides/getting-started/index.html")])]),s._v(" "),a("li",[a("p",[s._v("maven有很多插件，有时间可以试试\nhttps://maven.apache.org/plugins/index.html")])]),s._v(" "),a("li",[a("p",[s._v("pom\nhttps://maven.apache.org/guides/introduction/introduction-to-the-pom.html")])]),s._v(" "),a("li",[a("p",[s._v("配置plugins\nhttps://maven.apache.org/guides/mini/guide-configuring-plugins.html")])]),s._v(" "),a("li",[a("p",[s._v("库\nhttps://maven.apache.org/guides/introduction/introduction-to-repositories.html")])]),s._v(" "),a("li",[a("p",[s._v("指向自定义库\nhttps://maven.apache.org/guides/mini/guide-mirror-settings.html")])])]),s._v(" "),a("h2",{attrs:{id:"一，最常用的maven功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一，最常用的maven功能"}},[s._v("#")]),s._v(" 一，最常用的maven功能")]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 1，编译所有代码\nmvn compile\n\n// 2，编译测试代码，并运行测试用例\nmvn test\n\n// 仅仅编译测试代码\nmvn test-compile \n\n// 3，生成jar或war\nmvn package\n\n// 4，把生成的jar安装到自己的本地库（${user.home}/.m2/repository ）, 编译→测试→打包到本地库\nmvn install\n\n// 生成一个maven风格的站点，描述你的项目，自动生成内容\nmvn site\n\n// 删除构建的target目录的内容\nmvn clean \n\n// 生成项目依赖树\nmvn dependency:tree\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("https://maven.apache.org/run-maven/index.html\n//不仅build而且还check所有的整合测试是否成功。\n"),a("code",[s._v("mvn verify")])]),s._v(" "),a("p",[s._v("// 先删除然后编译且检查\n"),a("code",[s._v("mvn clean verify")])]),s._v(" "),a("h3",{attrs:{id:"查看java版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看java版本"}},[s._v("#")]),s._v(" 查看java版本")]),s._v(" "),a("p",[s._v("// 下面定义java版本是1.5")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<build>\n  <plugins>\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-compiler-plugin</artifactId>\n      <version>3.3</version>\n      <configuration>\n        <source>1.5</source> \n        <target>1.5</target>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"二，资源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二，资源文件"}},[s._v("#")]),s._v(" 二，资源文件")]),s._v(" "),a("p",[s._v("// 将资源放到main的resource下，就会打包到jar里\n// 将资源放到test的resource下，在单元测试中，使用代码可以访问到这些资源，例如都属性文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("my-app\n|-- pom.xml\n`-- src\n    |-- main\n    |   |-- java\n    |   |   `-- com\n    |   |       `-- mycompany\n    |   |           `-- app\n    |   |               `-- App.java\n    |   `-- resources\n    |       `-- META-INF\n    |           |-- application.properties\n    `-- test\n        |-- java\n        |   `-- com\n        |       `-- mycompany\n        |           `-- app\n        |               `-- AppTest.java\n        `-- resources\n            `-- test.properties\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"资源文件中引用其他属性的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源文件中引用其他属性的方法"}},[s._v("#")]),s._v(" 资源文件中引用其他属性的方法")]),s._v(" "),a("p",[s._v("当然可以直接定义，但是也可以引用其他地方定义好的【属性-值】\n验证方式：target/下的application.properties查看对应的值。")]),s._v(" "),a("h3",{attrs:{id:"_1-使用pom-xml或setting-xml设置的变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用pom-xml或setting-xml设置的变量值"}},[s._v("#")]),s._v(" 1. 使用pom.xml或setting.xml设置的变量值")]),s._v(" "),a("p",[s._v("//资源文件中能够使用${property name}\n// 这些property 可能设置在setting.xml , pom.xml ，甚至环境变量\n// 但是\n// 有个前提。就是pom.xml中必须设置filter = true\n// 否则，这些属性传递不到属性文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("   <build>\n        <resources>\n            <resource>\n                <directory>src/main/resources</directory>\n                <filtering>true</filtering>\n            </resource>\n        </resources>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-引用外部文件（非resources）设置变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用外部文件（非resources）设置变量值"}},[s._v("#")]),s._v(" 2. 引用外部文件（非resources）设置变量值")]),s._v(" "),a("p",[s._v("// 要引用外部文件\n// 必须在pom中引用它\nsrc/main/filters/filter.properties:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# filter.properties\nmy.filter.value=hello!\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("pom.xml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <build>\n    <filters>\n      <filter>src/main/filters/filter.properties</filter>\n    </filters>\n    <resources>\n      <resource>\n        <directory>src/main/resources</directory>\n        <filtering>true</filtering>\n      </resource>\n    </resources>\n  </build>\n</project>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("application.properties")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# application.properties\napplication.name=${project.name}\napplication.version=${project.version}\nmessage=${my.filter.value}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后执行 "),a("code",[s._v("mvn process-resources")]),s._v("\n在target/src/main/resource/application.properties中查看")]),s._v(" "),a("h3",{attrs:{id:"_3-pom-xml-properties中设置变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pom-xml-properties中设置变量值"}},[s._v("#")]),s._v(" 3. pom.xml properties中设置变量值")]),s._v(" "),a("p",[s._v("当然，也可以在pom.xml中引用这个filter.properties中的变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<build>\n    <resources>\n      <resource>\n        <directory>src/main/resources</directory>\n        <filtering>true</filtering>\n      </resource>\n    </resources>\n  </build>\n \n  <properties>\n    <my.filter.value>hello srx!</my.filter.value>\n  </properties>\n</project>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("这个变量值的设置会优先filter.properties中对变量值的设置。\n然后执行 "),a("code",[s._v("mvn process-resources")]),s._v(",target/下的application.properties中的该值，会变成hello srx!而不是hello")]),s._v(" "),a("h3",{attrs:{id:"_4-从命令行获得变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-从命令行获得变量值"}},[s._v("#")]),s._v(" 4. 从命令行获得变量值")]),s._v(" "),a("p",[s._v("application.properties")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# application.properties\njava.version=${java.version}\ncommand.line.prop=${command.line.prop}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v('mvn process-resources "-Dcommand.line.prop=hello again"')])]),s._v(" "),a("h2",{attrs:{id:"三，如何在远程存储库中部署我的jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三，如何在远程存储库中部署我的jar"}},[s._v("#")]),s._v(" 三，如何在远程存储库中部署我的jar")]),s._v(" "),a("p",[s._v("要将jar部署到外部存储库，必须在pom.xml中配置存储库url，\n并在settings.xml中配置用于连接到存储库的认证信息。\n"),a("strong",[s._v("pom.xml")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <distributionManagement>\n    <repository>\n      <id>mycompany-repository</id>\n      <name>MyCompany Repository</name>\n      <url>scp://repository.mycompany.com/repository/maven2</url>\n    </repository>\n  </distributionManagement>\n</project>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("setting.xml")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<settings>\n <servers>\n    <server>\n      <id>mycompany-repository</id>\n      <username>jvanzyl</username>\n      \x3c!-- Default value is ~/.ssh/id_dsa --\x3e\n      <privateKey>/path/to/identity</privateKey> (default is ~/.ssh/id_dsa)\n      <passphrase>my_key_passphrase</passphrase>\n    </server>\n  </servers>\n...\n</settings>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("Care should be taken if using passwords in settings.xml.\nFor more information, see "),a("a",{attrs:{href:"https://maven.apache.org/guides/mini/guide-encryption.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Password Encryption"),a("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);n.default=r.exports}}]);