window.BENCHMARK_DATA = {
  "lastUpdate": 1776600187016,
  "repoUrl": "https://github.com/przepompownia/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "d4c868bbdf296817c8c8deef695c947720a9c540",
          "message": "Test",
          "timestamp": "2026-03-09T20:39:16Z",
          "tree_id": "1bed35be2645658643d342d95add617a45969f6c",
          "url": "https://github.com/przepompownia/phpactor/commit/d4c868bbdf296817c8c8deef695c947720a9c540"
        },
        "date": 1773100741278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete",
            "value": 10349.3,
            "range": "± 2.41%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete",
            "value": 166039,
            "range": "± 0.72%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete",
            "value": 2427.6,
            "range": "± 0.96%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete",
            "value": 22604.1,
            "range": "± 0.98%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 33.139,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 34.805,
            "range": "± 2.54%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 57.313,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 20.151,
            "range": "± 6.1%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 93.581,
            "range": "± 1.21%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 56.798,
            "range": "± 1.58%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17749.08,
            "range": "± 0.9%",
            "unit": "μs",
            "extra": "0 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 589,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 1357,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12970,
            "range": "± 1.3%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12925.6,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.31,
            "range": "± 2.44%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 89.74,
            "range": "± 1.86%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 91.21,
            "range": "± 6.79%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 87.78,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.42,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.13,
            "range": "± 1.2%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.7,
            "range": "± 1.77%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.585,
            "range": "± 1.26%",
            "unit": "μs",
            "extra": "0 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.055,
            "range": "± 3.7%",
            "unit": "μs",
            "extra": "0 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch",
            "value": 151.6,
            "range": "± 7.62%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch",
            "value": 147.5,
            "range": "± 7.05%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch",
            "value": 140,
            "range": "± 3.66%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch",
            "value": 142.8,
            "range": "± 7.17%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1211940,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.086,
            "range": "± 5.2%",
            "unit": "μs",
            "extra": "0 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 310,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 314,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 298,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 637288,
            "range": "± 176.33%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 320345.8,
            "range": "± 0.32%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 72052.6,
            "range": "± 1.36%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 28209,
            "range": "± 0.5%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 24650,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 30357.4,
            "range": "± 0.5%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 822819,
            "range": "± 0.69%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 121568,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1619,
            "range": "± 3.22%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3062.3,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16982.2,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 154302.2,
            "range": "± 1.41%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 147304.4,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1773.5,
            "range": "± 7.99%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3066.4,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2223.2,
            "range": "± 1.83%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 976.22,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1469.44,
            "range": "± 1.34%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 6011,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97728.75,
            "range": "± 1.28%",
            "unit": "μs",
            "extra": "0 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 105146,
            "range": "± 0.61%",
            "unit": "μs",
            "extra": "0 iterations, 2 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 525554,
            "range": "± 200.55%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 120009.2,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cb25ad263b9d3aa87f98a6040bdc3194d715766c",
          "message": "gh-3022: explictly specify byte order (#3033)\n\nIf ext-mbstring is not installed, then\nhttps://github.com/symfony/polyfill-mbstring will take over. The\npolyfill uses `iconv`\n\nThere is an off-by-one issue that happens when the ext-mbstring is not\nenabled.\n\n`mbstring` outputs UTF-16BE (first in screenshot) and `iconv` outputs UTF-16LE and also adds BOM (fffe).\n\nBy explicitly specifying the byte order we remove the ambiguity.",
          "timestamp": "2026-03-21T21:25:34Z",
          "tree_id": "dfd0bce59f7ac156b4ed6d2d6477b9d2342bc560",
          "url": "https://github.com/przepompownia/phpactor/commit/cb25ad263b9d3aa87f98a6040bdc3194d715766c"
        },
        "date": 1774198304504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.172219178082127,
            "range": "± 1.79%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 164.0545557729949,
            "range": "± 0.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.2872230919765024,
            "range": "± 1.51%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.471127201565263,
            "range": "± 1.32%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 33.02133072407029,
            "range": "± 1.85%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 34.46136986301364,
            "range": "± 1.81%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 56.74027397260274,
            "range": "± 4.92%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 19.627123287670933,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 92.6194911937387,
            "range": "± 1.16%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 57.1482191780814,
            "range": "± 1.43%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17224.697455968682,
            "range": "± 3.37%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 571,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1353,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12294.027397260303,
            "range": "± 1.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12422.718199608706,
            "range": "± 0.88%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.08858649706457843,
            "range": "± 2.20%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09083248532289623,
            "range": "± 0.93%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.08978434442270126,
            "range": "± 2.57%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09126262230919847,
            "range": "± 1.17%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.08970958904109515,
            "range": "± 2.29%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09169921722113611,
            "range": "± 1.56%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.08925792563600818,
            "range": "± 2.13%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6720375733855073,
            "range": "± 0.99%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05677690802348304,
            "range": "± 4.01%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1376438356164383,
            "range": "± 6.66%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13859295499021515,
            "range": "± 8.05%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13457534246575334,
            "range": "± 5.67%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.1338630136986301,
            "range": "± 4.49%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1137152,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09113894324853218,
            "range": "± 9.38%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 297,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 289,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 295,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 79415,
            "range": "± 176.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 317208.7338551796,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 71041.66927592906,
            "range": "± 0.60%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28546.7514677104,
            "range": "± 0.80%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25071.54207436461,
            "range": "± 0.31%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30154.69863013723,
            "range": "± 0.26%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 815813.4500978366,
            "range": "± 0.44%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 117504,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1600.1917808219387,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3046.0410958904104,
            "range": "± 0.64%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16986.63600782781,
            "range": "± 0.57%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 151407.45596869098,
            "range": "± 0.39%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 145135.57729941444,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1739.1213307240876,
            "range": "± 2.67%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3075.3033268101626,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2228.634050880639,
            "range": "± 0.93%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 968.9585127201609,
            "range": "± 0.87%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1414.3880626223138,
            "range": "± 1.46%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5788,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97994.53816046982,
            "range": "± 3.02%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 103061.04207436391,
            "range": "± 2.26%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 169579,
            "range": "± 195.22%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 116076.77495107683,
            "range": "± 0.76%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "613aa65ce2944b44c8fbb92281ce11bd8c9dfbd6",
          "message": "Optimise index service and command (#3037)\n\nThis commit introduces a service to optimise the index.\n\nOptimising currently involces of iterating over all records and pruning\nany records that are defined in non-existing files and removing\n\n- Introduced index iterator\n- Optimizer\n- Add optimiser service that runs every hour by default\n- Add command to manually invoke the optimiser\n- Add LSP notification `phpactor/indexer/optimise` to manually invoke if\n  necessary.",
          "timestamp": "2026-04-13T22:22:49+01:00",
          "tree_id": "ef2b52c248cda116c5ac9866d838659f54e835da",
          "url": "https://github.com/przepompownia/phpactor/commit/613aa65ce2944b44c8fbb92281ce11bd8c9dfbd6"
        },
        "date": 1776123117235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.965146771037158,
            "range": "± 2.10%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 163.8702054794515,
            "range": "± 1.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.268115459882594,
            "range": "± 2.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.250520547944802,
            "range": "± 0.93%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 27.451702544031356,
            "range": "± 1.44%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 29.43706457925658,
            "range": "± 1.12%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 50.55659491193772,
            "range": "± 1.53%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 15.292641878669162,
            "range": "± 1.72%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 87.44097847358042,
            "range": "± 1.79%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 56.483835616438164,
            "range": "± 1.92%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17162.50176125242,
            "range": "± 2.82%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 560,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1435,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12031.332681017764,
            "range": "± 1.16%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12207.41095890417,
            "range": "± 0.66%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.09129373776908205,
            "range": "± 1.49%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09185009784735686,
            "range": "± 2.47%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.0913776908023475,
            "range": "± 2.30%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09105890410958928,
            "range": "± 5.38%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.0900739726027391,
            "range": "± 2.24%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09023992172211305,
            "range": "± 2.35%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09048590998043149,
            "range": "± 1.35%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.679776516634047,
            "range": "± 2.25%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05740958904109584,
            "range": "± 3.11%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1357475538160469,
            "range": "± 10.57%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13746575342465747,
            "range": "± 10.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13080039138943242,
            "range": "± 7.03%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13297260273972591,
            "range": "± 6.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1158385,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09022700587084156,
            "range": "± 10.82%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 299,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 313,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 344,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 322308.988258317,
            "range": "± 126.87%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1570.1917808219268,
            "range": "± 1.45%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3059.796477495106,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 17207.219178081636,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 154346.60665362305,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 147479.83757338673,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 73723.55381604671,
            "range": "± 0.72%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 121660,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1742.5812133072811,
            "range": "± 1.96%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3074.0410958904176,
            "range": "± 2.18%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2199.1506849314655,
            "range": "± 0.75%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5822,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 72470.45792563612,
            "range": "± 0.24%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28695.36399217244,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25102.420743639974,
            "range": "± 1.51%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30148.729941292182,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 824055.487279844,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 960.0491193737836,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1406.8007827788654,
            "range": "± 3.55%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 164139,
            "range": "± 199.91%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 112383.74168297354,
            "range": "± 0.58%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 93511.48825831898,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 99379.04696673201,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "przepompownia@users.noreply.github.com",
            "name": "Tomasz N",
            "username": "przepompownia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a46d386795040bc7974b1995108336488d90fd2",
          "message": "Allow goto definition from first class callables (#3025)",
          "timestamp": "2026-04-18T12:47:07+01:00",
          "tree_id": "1d0f352ee7dd446f234eae329724fa9decd4a15b",
          "url": "https://github.com/przepompownia/phpactor/commit/6a46d386795040bc7974b1995108336488d90fd2"
        },
        "date": 1776600186368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.008561643835424,
            "range": "± 1.47%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 154.3497358121326,
            "range": "± 0.85%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3182583170254465,
            "range": "± 1.41%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.02498630136996,
            "range": "± 0.78%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 30.60829745596886,
            "range": "± 1.65%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 32.47874755381586,
            "range": "± 1.30%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 54.904109589041276,
            "range": "± 1.07%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 18.316281800391355,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 86.0402348336599,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 54.40673189823874,
            "range": "± 3.16%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17284.074363992106,
            "range": "± 2.81%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 577,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1394,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 11857.849315068499,
            "range": "± 2.90%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12014.976516634117,
            "range": "± 0.86%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07420254403131131,
            "range": "± 4.30%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07637221135029104,
            "range": "± 2.11%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.07540547945205535,
            "range": "± 3.11%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.0752025440313103,
            "range": "± 3.89%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07466536203522477,
            "range": "± 4.96%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.0739996086105675,
            "range": "± 3.26%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07384090019569395,
            "range": "± 2.61%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.566146575342469,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05906986301369868,
            "range": "± 5.06%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13879060665362022,
            "range": "± 10.12%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13795107632093925,
            "range": "± 5.72%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.1346673189823874,
            "range": "± 11.02%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13353620352250484,
            "range": "± 1.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1087833,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09280039138943233,
            "range": "± 7.96%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 288,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 294,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 293,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 294125.362035225,
            "range": "± 128.45%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1524.0136986301404,
            "range": "± 3.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2937.4422700587033,
            "range": "± 1.72%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 15219.260273972734,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 136846.83757338556,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 130732.30136986288,
            "range": "± 0.63%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 71556.21917808073,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 109276,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1632.365949119377,
            "range": "± 1.83%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2984.6438356164344,
            "range": "± 4.42%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2089.0998043052923,
            "range": "± 1.24%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5635,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 60993.33855185914,
            "range": "± 0.55%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26341.09589041068,
            "range": "± 0.52%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 23164.634050879933,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29393.935420743597,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 738265.1369863008,
            "range": "± 0.70%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 938.0698630137092,
            "range": "± 0.71%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1348.2050880626275,
            "range": "± 1.21%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 165756,
            "range": "± 201.28%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 117727.5146771039,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97150.95596868842,
            "range": "± 1.41%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 103256.79256360143,
            "range": "± 0.32%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      }
    ]
  }
}