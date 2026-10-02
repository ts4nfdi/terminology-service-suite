"use client";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiIcon,
  EuiLoadingSpinner,
  EuiPanel,
  EuiPopover,
  EuiProvider,
  EuiText,
  EuiTextColor,
} from "@elastic/eui";
import { useRef, useState } from "react";
import { GraphViewPresentationProps } from "../../../app";
import { getErrorMessageToDisplay } from "../../../app/util";
function GraphViewPresentation(
  props: GraphViewPresentationProps,
): React.JSX.Element {
  const {
    downloadGraphData,
    reset,
    isLoading,
    isError,
    error,
    removeNodeFromGraph,
    hideLegend,
    sourceNodeBgColor,
    sourceLabel,
    targetIri,
    commonNodesBgColor,
    targetNodeBgColor,
    targetLabel,
    exclusiveToTargetIriColor,
    className,
    stopFullWidth,
    showNothingToAddMessage,
    showNodeNotSelectedMessage,
    container,
  } = props;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const fullScreenContainerRef = useRef(null);
  const finalClassName = className || "ts4nfdi-graph-style";

  function renderLegend() {
    if (hideLegend) {
      return <></>;
    }
    const itemStyle = {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      display: "inline-block",
    };
    const itemPadding = { paddingTop: "5px" };
    return (
      <div
        style={{
          position: "absolute",
          display: "inline-block",
          backgroundColor: "#e5e7ea",
          padding: "5px",
          borderRadius: "10px",
          paddingTop: "10px",
          bottom: "20px",
          right: "20px",
        }}
      >
        <ul style={{ padding: "5px" }}>
          <li style={itemPadding}>
            <div
              style={{ backgroundColor: sourceNodeBgColor, ...itemStyle }}
            ></div>{" "}
            Source: <i>{sourceLabel}</i>{" "}
          </li>
          {targetIri && (
            <>
              <li style={itemPadding}>
                <div style={{ backgroundColor: "#455469", ...itemStyle }}></div>{" "}
                Subtree exclusive to <i>{sourceLabel}</i>{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: commonNodesBgColor, ...itemStyle }}
                ></div>{" "}
                Common subtree{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: targetNodeBgColor, ...itemStyle }}
                ></div>{" "}
                Target: <i>{targetLabel}</i>{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{
                    backgroundColor: exclusiveToTargetIriColor,
                    ...itemStyle,
                  }}
                ></div>{" "}
                Subtree exclusive to <i>{targetLabel}</i>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);

  const closePopover = () => setIsPopoverOpen(false);

  const GuideMeBtn = (
    <EuiButtonEmpty iconType="info" iconSide="right" onClick={onButtonClick}>
      Guide me
    </EuiButtonEmpty>
  );

  const runFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else if (fullScreenContainerRef.current) {
      let graphContainerDiv = fullScreenContainerRef.current as HTMLDivElement;
      graphContainerDiv.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  return (
    <div
      className={finalClassName}
      style={
        !stopFullWidth
          ? { width: "100%", height: "100vh", overflow: "hidden" }
          : {}
      }
      ref={fullScreenContainerRef}
    >
      <EuiPanel style={{ height: "100vh" }} data-testid="graph-widget">
        {isError && (
          <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>
        )}
        <EuiPanel
          style={{ fontSize: 12 }}
          paddingSize="s"
          borderRadius="none"
          data-testid="graph-view"
        >
          <EuiButton
            size="s"
            onClick={reset}
            aria-label="reset the graph to default view"
            title="Reset the graph to the original state."
            style={{ textDecoration: "none" }}
          >
            Reset
          </EuiButton>
          {!isFullScreen && (
            <EuiPopover
              button={GuideMeBtn}
              isOpen={isPopoverOpen}
              closePopover={closePopover}
            >
              <EuiText style={{ width: 300, padding: 10 }}>
                <li>Expand the nodes by double clicking on them</li>
                <li>Zoom out/in by scrolling on the graph.</li>
                <li>
                  Go to fullscreen mode by clicking the fullscreen icon on the
                  right corner.
                </li>
                <li>
                  Download the graph data as JSON by clicking the download icon
                  on the right corner.
                </li>
                <li>
                  You can go back to the initial graph by clicking on the Reset
                  button.
                </li>
                <li>You can move the nodes and edges around by dragging.</li>
              </EuiText>
            </EuiPopover>
          )}

          {showNothingToAddMessage && (
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#FBCBC6",
                color: "red",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              nothing to add
            </div>
          )}

          <div
            style={{ display: "inline-flex", float: "right", paddingTop: 10 }}
          >
            <button
              onClick={removeNodeFromGraph}
              style={{ marginRight: "20px", color: "red" }}
              title="Remove node"
              aria-label="remove the selected node from graph"
            >
              <EuiIcon type="cut" />
            </button>
            {showNodeNotSelectedMessage && (
              <EuiTextColor
                color="red"
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  marginLeft: "-10px",
                }}
              >
                Please select a node to remove
              </EuiTextColor>
            )}
            <button
              onClick={downloadGraphData}
              title="Download graph data as json."
              aria-label="download graph data as json"
            >
              <EuiIcon type="download" />
            </button>
            <button
              onClick={runFullScreen}
              style={{ marginLeft: "20px" }}
              title={!isFullScreen ? "Fullscreen mode" : "Exit fullscreen mode"}
              aria-label={
                !isFullScreen ? "go to fullscreen mode" : "exit fullscreen mode"
              }
            >
              {!isFullScreen ? (
                <EuiIcon type="fullScreen" />
              ) : (
                <EuiIcon type="fullScreenExit" />
              )}
            </button>
          </div>
        </EuiPanel>

        {isLoading && <EuiLoadingSpinner size="m" />}
        <div
          ref={container}
          className="graph-container"
          style={
            !stopFullWidth
              ? { width: "100%", height: "100vh", margin: "auto" }
              : {}
          }
        />

        <div
          style={{
            position: "absolute",
            display: "inline-block",
            backgroundColor: "#e5e7ea",
            padding: "5px",
            borderRadius: "10px",
            paddingTop: "10px",
            bottom: "20px",
            right: "20px",
          }}
        ></div>
        {renderLegend()}

        {/*the default background color for the request Fullscreen browser API is black. so we need this to keep it white. */}
        <style>{`
        .graph-container:fullscreen,
        .graph-container::backdrop {
          background-color: white;
        }
      `}</style>
      </EuiPanel>
    </div>
  );
}

function WrappedGraphViewPresentation(
  props: GraphViewPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <GraphViewPresentation {...props} />
    </EuiProvider>
  );
}

export { GraphViewPresentation, WrappedGraphViewPresentation };
