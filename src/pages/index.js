import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`kettle`, `data`, `integration`, `ETL`, `PDI`, ``]} />
      <h1>Welcome to the Kettle community!</h1>
      <p>This website contains links to useful resources concerning the Kettle open source data integration project.</p>

      <h2>Blogs & Articles</h2>
      <a href="http://sandbox.kettle.be/wordpress/" target="_blank">Matt Casters on Data Integration and Graphs</a><br/>
      <a href="https://medium.com/neo4j/getting-started-with-kettle-and-neo4j-32ff15b991f9" target="_blank">Getting set up with Kettle and Neo4j (Medium)</a><br/>
      <p/>
      <h2>Downloads</h2>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-8.2.0.3-519-REMIX.zip">kettle-neo4j-remix-8.2.0.3-519-REMIX.zip (>1GB)</a><br/>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-8.2.0.3-519-REMIX.tgz">kettle-neo4j-remix-8.2.0.3-519-REMIX.tgz (>1GB)</a><br/>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-8.2.0.3-519-REMIX.zip">kettle-neo4j-remix-8.2.0.3-519-REMIX.zip (build log with version info)</a><br/>
          <br/>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.zip">kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.zip (UNSTABLE, >1GB)</a><br/>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.tgz">kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.tgz (UNSTABLE, >1GB)</a><br/>
          <a href="https://s3.amazonaws.com/kettle-neo4j/kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.log">kettle-neo4j-remix-beam-8.2.0.3-519-REMIX.log (build log with version info)</a><br/>
      <a href="https://hub.docker.com/r/mattcasters/webspoon-neo4j/">WebSpoon docker image with Neo4j solutions plugins</a><br/>
      <p/>
      <h2>Kettle plugins for Neo4j</h2>
      <a href="https://github.com/knowbi/knowbi-pentaho-pdi-neo4j-output">Neo4j plugins for Kettle </a><br/>
      <a href="https://github.com/mattcasters/kettle-neo4j-logging">Kettle Neo4j Logging</a><br/>
      <p/>
      <h2>Kettle plugins</h2>
      <a href="https://github.com/mattcasters/kettle-environment">Environment</a><br/>
      <a href="https://github.com/mattcasters/kettle-needful-things">Needful Things</a><br/>
      <a href="https://github.com/mattcasters/pentaho-pdi-dataset">Data sets and unit testing</a><br/>
      <a href="https://github.com/mattcasters/kettle-debug-plugin">Debugging</a><br/>
      <a href="https://github.com/mattcasters/load-text-from-file-plugin">Load Text From File (Apache Tika)</a><br/>
      <a href="https://github.com/mattcasters/metastore">Metastore utilities</a><br/>
      <a href="https://github.com/mattcasters/kettle-mongodb-changes">Read from MongoDB changes stream</a><br/>
      <a href="https://github.com/mattcasters/kettle-azure-event-hubs">Azure Event Hubs</a><br/>
      <p/>
      <h2>Kettle integration with Apache Beam</h2>
      <a href="https://github.com/mattcasters/kettle-beam">Kettle Beam</a><br/>
      <p/>

    </Layout>
)

export default IndexPage
