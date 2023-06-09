@isTest
private class RecipeTreeViewController_Tests {
    @isTest
    static void testGenerateTreeDataPositive() {
        Map<Id, ApexClass> fakeResults = new Map<Id, ApexClass>(
            [
                SELECT Name, Body
                FROM ApexClass
                WHERE
                    name LIKE 'RecipeTreeViewController'
                    OR name LIKE 'SOQLRecipes'
            ]
        );
        Test.setFixedSearchResults(new List<Id>(fakeResults.keyset()));
        Test.startTest();
        List<RecipeTreeViewController.RecipeTreeData> tree = RecipeTreeViewController.generateTreeData();
        Test.stopTest();

        System.Assert.areEqual(
            2,
            tree.size(),
            'Expected to find two sub trees'
        );
        System.Assert.areEqual(
            'Recipes',
            tree[0].name,
            'Expected Recipes to be the first element'
        );
       
        System.Assert.isTrue(
            tree[0].items.size() > 0,
            'expected for recipes to have sub-groups'
        );
        
    }
}