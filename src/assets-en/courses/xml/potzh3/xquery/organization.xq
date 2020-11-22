<result>
{
  for $project in fn:doc("data/organization.xml")/organization/project
  for $employee in fn:doc("data/organization.xml")/organization/employee
  where fn:exists(
    for $member in $project/member
    where $member/text() eq $employee/@eid
    return $member
  )
  return
    element item {
      element project {
        $project/name/text()
      },
      element employee {
        $employee/name/text()
      }
    }
}
</result>