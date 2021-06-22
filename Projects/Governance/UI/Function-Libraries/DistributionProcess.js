function newGovernanceFunctionLibraryDistributionProcess() {
    let thisObject = {
        calculate: calculate
    }

    return thisObject

    function calculate() {

        let pools = UI.projects.foundations.spaces.designSpace.workspace.getHierarchyHeadsByNodeType('Pools')
        let features = UI.projects.foundations.spaces.designSpace.workspace.getHierarchyHeadsByNodeType('Features')
        let assets = UI.projects.foundations.spaces.designSpace.workspace.getHierarchyHeadsByNodeType('Assets')
        let positions = UI.projects.foundations.spaces.designSpace.workspace.getHierarchyHeadsByNodeType('Positions')
        let userProfiles = UI.projects.foundations.spaces.designSpace.workspace.getHierarchyHeadsByNodeType('User Profile')

        UI.projects.governance.functionLibraries.tokenPower.calculate(
            userProfiles
        )

        UI.projects.governance.functionLibraries.votes.calculate(
            pools,
            features,
            assets,
            positions,
            userProfiles
        )

        UI.projects.governance.functionLibraries.weights.calculate(
            pools,
            features,
            assets,
            positions
        )

        UI.projects.governance.functionLibraries.tokens.calculate(
            pools
        )

        UI.projects.governance.functionLibraries.referralProgram.calculate(
            pools,
            userProfiles
        )

        UI.projects.governance.functionLibraries.supportProgram.calculate(
            pools,
            userProfiles
        )

        UI.projects.governance.functionLibraries.mentorshipProgram.calculate(
            pools,
            userProfiles
        )

        UI.projects.governance.functionLibraries.stackingProgram.calculate(
            pools,
            userProfiles
        )
        
        UI.projects.governance.functionLibraries.claimsProgram.calculate(
            features,
            assets,
            positions,
            userProfiles
        )
    }
}