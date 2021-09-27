Feature: World University Rankings

# Author
# Last Updated
# Comments

 Scenario: Verify University names, logos, ranks, ranking score and sorting of overall score in ranking tab
 Given On launching url, user is landing on "World University Rankings" page
 When  Check by default "University Rankings" tab is selected and is highlighted
 Then  Check latest year is selected in "Year" dropdown
 And Check if Rankings table is present
 And Rankings table header consists of 3 columns
 And Check Results per Page
 And validate University with Rank 1 has the Highest OverallScore and Lowest OverallScore
 And Check if scores are equal, rank is appended with equal sign and to check next rank
 And Check UniversityNames, Universitylocation, rank column, score column has values
 And Check UniversityLogos has images
 And Check the score sorting
 And Check "KnowMore", "Compare" and "shortlist" icons are available
 And Check DFPs in page
 And Check DFPs 1 at the top and 2 inside table
 And validate the year
 And Check pagination

 # Author
# Last Updated
# Comments

Scenario: Ranking Indicators Tab
Given Click on Ranking Indicators Tab
When Check "Rankings Indicators" table is displayed
Then Check latest year is selected in "Year" dropdown
And  Check UniversityNames, Universitylocation, rank column, score, ranking indicators column has values
And Check Indicator Sorting

# Author
# Last Updated
# Comments

Scenario: Subject Rankings Page
Given Launch Subject Rankings URL and user is navigated to Subject Rankings Page
And Check DFPs in page

 

